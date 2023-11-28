interface StyleSheet {
  fontFamily: string; 
}

interface BoxProps {
  children: React.ReactNode; 
  styleSheet: StyleSheet; 
  tag: any;
}

export default function Box({ children, styleSheet , tag} : BoxProps) {
  const Tag = tag || 'div'; 

  return (
    <Tag style={styleSheet}>
      {children}
    </Tag>
  );
}
