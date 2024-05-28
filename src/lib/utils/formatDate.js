  // 한글로 포매팅 하여 시간을 표시합니다.
  const formatDate = function() {
    return new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',  // 'numeric' or 'long'
      day: 'numeric',
      weekday: 'long'
    })
  }

  export default formatDate;