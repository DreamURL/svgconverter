# react component

export function Cup() {
  const [isHovered, setIsHovered] = useState(false);

  const getHoverStyle = () => {
    if (!isHovered) return {};
    
    const baseTransform = `rotate(0deg)`;
    
    return { 
      opacity: 0.8,
      transform: baseTransform 
    };
  };

  const baseStyle = {
    // Size property
    width: '100px',
    height: '100px',
    
    // Rotation property
    transform: 'rotate(0deg)',
    
    // Opacity property
    opacity: 1,
    
    // Transition for smooth hover effects
    transition: 'all 0.3s ease-in-out',
    
    // Animation property
    animation: 'spin 2s infinite'
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...baseStyle,
        ...getHoverStyle()
      }}
    >
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" xmlSpace="preserve">
<g id="_x30_4">
</g>
<g id="_x30_3">

원래는 이렇게 나오는게 맞는데, 

실제로 export code를 해보면

    <div
      
      style={{
        ...baseStyle
      }}
    >
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g id="_x30_4">
</g>
<g id="_x30_3">

이렇게 나오고 있어. 이건 어떤 svg 파일을 사용하냐에 따라 조건이 달라지는데, 이건 이미지를 svg로 변경한 경우에 대해서 해당 svg 자체에 포함된 옵션이 그대로 나왔다고 볼 수 있어. 이렇게 svg 파일 자체에 옵션이 포함된 경우엔 codeModal에서 react component로 내보낼때 <svg> 안에 내용을 리모델링하는 작업을 해준다음에 유저에게 결과를 보여줘야될 것같아. "<svg>" 파일 내의 style을 제거하고 "xmlns:xlink" 이거는 "xmlnsXlink" 이렇게 바꾸고 "xml:space"이것은 "xmlSpace" 이렇게 바꿔줘야 react component로 사용할 수 있어.