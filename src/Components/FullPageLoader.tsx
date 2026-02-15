import { Spinner } from "react-bootstrap";

const FullPageLoader = (props: any) => {
  const { show } = props;
  if (!show) return null;

  return (
    <div style={overlayStyle}>
      <Spinner animation="border" variant="light" />
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(128, 128, 128, 0.6)", // Grey overlay
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

export default FullPageLoader;
