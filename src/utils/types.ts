export interface CloseModalProps {
    onClose: () => void;
}
  
export interface VideoProps {
    img: string;
    title: string;
    description: string;
    videoId: string;
    publishDate: string;
    pathVideo: string;
  }
  
export interface VideoState {
    searchMode: boolean;
    searchTerm: string;
    videoProps: VideoProps | null;
}

export interface SelectorState {
    theme: 'light' | 'dark';
    favorites: VideoProps[];
  }