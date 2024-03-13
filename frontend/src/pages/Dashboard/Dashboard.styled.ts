import styled from "styled-components";
import commingSoon from '../../assets/images/cooming-soon.jpg'


export const Navigation = styled.div`
    background-image: url(${commingSoon});
  background-repeat: no-repeat;
  background-size: cover; /* Hiển thị ảnh toàn màn hình */
  background-position: center center; /* Canh giữa ảnh */
  width: 100vw; /* Chiều rộng 100% của viewport */
  height: 100vh; /* Chiều cao 100% của viewport */
`