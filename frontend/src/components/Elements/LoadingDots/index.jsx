import { ThreeDots } from 'react-loader-spinner'

export const LoadingDots = () => {
  return <ThreeDots
    visible={true}
    height="40"
    width="40"
    color="#ffffff"
    radius="6"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />;
};
