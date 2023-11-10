import React from "react";

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorStatusCode: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (error.response) {
      const { status } = error.response;
      this.setState({ errorStatusCode: status });

      if (status === 401) {
        this.props.navigate("/login", { replace: true });
      }
    }
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.FallbackComponent;
      switch (this.state.errorStatusCode) {
        case 400:
          return (
            <FallbackComponent
              message="잘못된 요청입니다. 다시 시도해주세요."
              buttonLabel="이전으로"
              to={-1}
            />
          );
        case 401:
          return (
            <FallbackComponent
              message="로그인이 필요한 페이지입니다."
              buttonLabel="로그인"
              to="/login"
            />
          );
        case 403:
          return (
            <FallbackComponent
              message="권한이 없습니다. 정상적인 경로로 접근해주세요."
              buttonLabel="이전으로"
              to={-1}
            />
          );
        case 500:
          return (
            <FallbackComponent
              message="서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
              buttonLabel="홈으로"
              to="/"
            />
          );
        default:
          return (
            <FallbackComponent
              message="서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
              buttonLabel="홈으로"
              to="/"
            />
          );
      }
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
