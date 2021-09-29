import styled from "styled-components";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  width: 1000px;
  height: 580px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-image: url("images/sign_bg.png");
  background-repeat: no-repeat;
  background-position: 100%;
`;

export const MyInfoBox = styled.div`
  width: 1000px;
  height: 380px;
  position: absolute;
  display: flex;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-position: 100%;
`;

export const MyInfoLeft = styled.div`
  height: 50%;
  width: 300px;
  background-color: white;
  padding: 80px 30px;
  
  img{
    padding : 30px;
    width : 250px;
    height : 250px;
    border-radius: 125px;
  }

  justify-content: space-between;
`;

export const MyInfoRight = styled.div`
  height: 50%;
  width: 700px;
  background-color: white;
  padding: 100px 100px;


  justify-content: space-between;
. info{
    color: ${colors.gray};
}
  
  h1 {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 500;
  }
button{
    position:absolute;
    right : 20px;
    bottom : 20px;
}
`;






export const MyReviewBox = styled.div`
  width: 1000px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 400px;
  background-color: white;
  box-shadow: rgba(0 0, 0, 0.16) 0px 1px 4px;
  background-position: 100%;
  h2 {
    margin-top: 20px;
    margin-left : 20px;
  }
`;




export const MyReview= styled.div`
  height: 50%;
  width: 700px;
  background-color: white;
  padding: 20px 30px;
  margin : 20px 170px;
 
  justify-content: space-between;
  .date{
    color : ${colors.gray};
      margin-left : 10px;
  }
  .pictures{
    display : flex;
  }
  .user{
    display : flex;
  }
  .pictures div{
    width : 50px;
    height : 50px;
    margin : 10px;
    padding :15px;
    border : solid 1px;
  }
 .rsetaurant{
   color :  ${colors.gray};
 }
  img{
    margin-right : 10px;
    border-radius: 40px;
  }
`;

