type LoadingPropsType = {
  loadingError: Boolean;
}

const Loading = ({loadingError}: LoadingPropsType) => {
  return (
    loadingError ? <div className="loading-error">ローディングエラー</div> : <div className="loading"></div>
  );
}

export default Loading;