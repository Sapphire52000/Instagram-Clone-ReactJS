import React from "react";
import "../css/MyPage.css";

function MyPage() {
  return (
    <div className="myPage">
      <div className="myPage_info">
        <div className="my_Info">
          <div className="email_Address">
            <h3>Email</h3>
            <p>email address</p>
          </div>
          <div className="name">
            <h3>Name</h3>
            <p>Name</p>
          </div>
          <div className="ic_token">
            <h3>IC Token</h3>
            <p>IC Token</p>
          </div>
          <div className="wallet_Address">
            <h3>Wallet Address</h3>
            <p>0x6d51f984d65d16d85f416ee</p>
          </div>
        </div>

        <div className="myPage_myToken">
          <div className="address_send">
            <h3>보낼 주소 인풋</h3>
          </div>
          <div className="token_num">
            <h3>갯수 인풋</h3>
          </div>
          <div className="send_Button">
            <h3>전송</h3>
          </div>
        </div>
        
      </div>

      {/*내 게시물과 내 NFT를 어떻게 해야 왔다갔다 되지? useState */}
      <div className="whatIHave"></div>
    </div>
  );
}

export default MyPage;
