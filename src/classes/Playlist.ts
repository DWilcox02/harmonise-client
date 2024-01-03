class PlaylistImage {
  constructor(
    public height: number,
    public url: string,
    public width: number
  ) {}
}

class Playlist {
  constructor(
    public externalUrl: string,
    public href: string,
    public id: string,
    public name: string,
    public owner: string,
    public tracksHref: string,
    public uri: string,
    public image?: PlaylistImage
  ) {}
}

export { Playlist, PlaylistImage };
