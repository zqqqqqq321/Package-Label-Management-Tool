// 在 NavigateButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HomeNavigateButtonProps {
  to: string;
  label: string;
}

const HomeNavigateButton: React.FC<HomeNavigateButtonProps> = ({ to, label }) => {
  const navigate = useNavigate();

  return (
    <button className="home-button" onClick={() => navigate(to)}>
      {label}
    </button>
  );
};

export default HomeNavigateButton;
