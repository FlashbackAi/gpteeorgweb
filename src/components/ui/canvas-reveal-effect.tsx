export const CanvasRevealEffect = ({ 
  containerClassName, 
  colors, 
}: any) => {
  return (
    <div 
      className={`w-full h-full ${containerClassName}`} 
      style={{ 
        background: colors && colors.length > 0 
          ? `radial-gradient(circle, rgba(${colors[0].join(',')}, 0.15) 0%, transparent 100%)` 
          : undefined 
      }} 
    />
  );
};
