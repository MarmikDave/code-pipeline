export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{ 
        cursor: 'grab', 
        minWidth: '120px', 
        height: '40px',
        display: 'flex', 
        alignItems: 'center', 
        borderRadius: '20px',
        backgroundColor: '#0052cc',
        justifyContent: 'center', 
        flexDirection: 'column',
        transition: 'all 0.3s',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }} 
      draggable
    >
        <span style={{ color: '#ffffff', fontSize: '14px' }}>{label}</span>
    </div>
  );
};