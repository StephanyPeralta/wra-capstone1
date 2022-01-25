export interface CloseModalProps {
    onClose: () => void;
}
  
export interface Video {
    img: string;
    title: string;
    description: string;
    videoId: string;
    publishDate: string;
    pathVideo: string;
  }
  
export interface SearchStatusState {
    searchMode: boolean;
    searchTerm: string;
}

export interface PreferencesState {
    theme: 'light' | 'dark';
    favorites: Video[];
  }