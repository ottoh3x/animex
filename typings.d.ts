
interface useEpisodesProps {
    isEpImgEnabled : boolean | any;
    enableEpImg : () => void;
    disableEpImg : () => void;
}

interface useAutoNextProps {
    isAutoNext : boolean | any;
    enableAutoNext : () => void;
    disableAutoNext : () => void;
}

interface useAutoSkipProps {
    isAutoSkip : boolean | any;
    enableAutoSkip : () => void;
    disableAutoSkip : () => void;
}

interface useSortProps {
    isSort : boolean | any;
    enableIsSort : () => void;
    disableIsSort : () => void;
}

interface useAutoPlayProps {
    isAutoPlay : boolean | any;
    enableAutoPlay : () => void;
    disableAutoPlay : () => void;
}

interface useContactProps {
    isContact : boolean | any;
    enableIsContact : () => void;
    disableIsContact : () => void;
}



interface MsgProps {
    title: string;
    message: string;
  }


interface SubtitleProps {
    url: string;
    lang: string;
  }