import React, { Component } from 'react';
import axios from 'axios';
import './Data.css';

class Data extends Component {
  state = {
    data: [],
    memberId: 'eleuve@daum.net'
  };

  componentDidMount() {
    // Node.js 서버의 URL을 지정합니다.
  //  const serverUrl = 'https://port-0-node-iciy2almu01uxz.sel5.cloudtype.app/api/data'; // Node.js 서버의 실제 URL로 대체해야 합니다.
  const serverUrl = 'http://localhost:3002/api/select'; // Node.js 서버의 실제 URL로 대체해야 합니다.
    // 서버로 GET 요청을 보냅니다.
    axios.get(serverUrl)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    const {data, memberId} = this.state;

    // 특정 회원 ID를 사용하여 해당 회원을 찾습니다.
    const member = data.find(item => item.m_id === memberId);

    if(!member) {
      return <div>No member found</div>
    }
    return (
      
      <div>
        <h1>회원 정보 출력</h1>
        <p className="name">ID : {member.m_id}</p>
        <p>Name: {member.m_name}</p>
          {/* {this.state.data.map(item => (
            <li key={item.m_id}>{item.m_id}</li>
          ))} */}
        
      </div>
    );
  }
}

export default Data;
