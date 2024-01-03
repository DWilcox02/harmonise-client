interface PlaylistsButtonProps {
  handleClick: () => void;
}

function PlaylistsButton({ handleClick }: PlaylistsButtonProps) {
  return (
    <div>
      <button onClick={handleClick}>Show Playlists</button>
    </div>
  );
}

export default PlaylistsButton;
