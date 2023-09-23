import React, { Component } from 'react';
import axios from 'axios';

class Data extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    // Node.js 서버의 URL을 지정합니다.
    const serverUrl = 'https://port-0-node-iciy2almu01uxz.sel5.cloudtype.app/api/data'; // Node.js 서버의 실제 URL로 대체해야 합니다.

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
    return (
      <div>
        <h1>Received Data</h1>
        <ul>
          {this.state.data.map(item => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Data;
