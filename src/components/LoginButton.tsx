
interface LoginButtonProps {
  handleLogin: () => void
}

export default function LoginButton({handleLogin}: LoginButtonProps) {

  return (
    <button onClick={handleLogin}>
      Login to Spotify
    </button>
  );
}