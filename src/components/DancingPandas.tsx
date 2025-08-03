export const DancingPandas = () => {
  const pandas = ['🐼', '🐼', '🐼', '🐼', '🐼'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {pandas.map((panda, index) => (
        <div
          key={index}
          className="dancing-panda absolute"
          style={{
            left: `${15 + index * 20}%`,
            top: `${20 + (index % 2) * 40}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {panda}
        </div>
      ))}
      
      {/* Additional floating pandas */}
      <div
        className="dancing-panda absolute opacity-60"
        style={{
          right: '10%',
          top: '30%',
          animationDelay: '1.2s',
        }}
      >
        🐼
      </div>
      
      <div
        className="dancing-panda absolute opacity-40"
        style={{
          left: '5%',
          bottom: '25%',
          animationDelay: '2.1s',
        }}
      >
        🐼
      </div>
      
      <div
        className="dancing-panda absolute opacity-50"
        style={{
          right: '20%',
          bottom: '15%',
          animationDelay: '0.8s',
        }}
      >
        🐼
      </div>
    </div>
  );
};