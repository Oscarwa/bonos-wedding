import {
  faBackwardStep,
  faCompactDisc,
  faForwardStep,
  faMusic,
  faPause,
  faPlay,
  faUserFriends,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactHowler from "react-howler";
import './style.css';

const everlong = require("../../music/everlong.mp3");
const cherubRock = require("../../music/01 - The Smashing Pumpkins - Cherub Rock.mp3");
const avaAdore = require("../../music/02 - The Smashing Pumpkins - Ava Adore.mp3");
const tonightTonight = require("../../music/02 - The Smashing Pumpkins - Tonight, Tonight.mp3");
const _1979 = require("../../music/05 - The Smashing Pumpkins - 1979.mp3");
const landslide = require("../../music/09 - The Smashing Pumpkins - Landslide.mp3");
const allMyLife = require("../../music/all-my-life.mp3");
const allTheSmallThings = require("../../music/all-the-small-things.mp3");
const heart = require("../../music/Heart - Barracuda.mp3");
const everythingIDoIDoItForYou = require("../../music/New Found Glory - Everything I do I do it for you.mp3");
const kissMe = require("../../music/new found glory - Kiss Me.mp3");
const whereIsMyMind = require("../../music/Pixies - Where Is My Mind.mp3");
const somebodyToLove = require("../../music/somebody-to-love.mp3");
const linger = require("../../music/The Cranberries - Linger.mp3");
const fridayImInLove = require("../../music/The Cure - Friday I'm in Love.mp3");
const justLikeHeaven = require("../../music/The Cure - Just Like Heaven.mp3");
const loveSong = require("../../music/The Cure - Love Song.mp3");
const maps = require("../../music/The Yeah Yeah Yeahs - Maps.mp3");
const timesLikeThese = require("../../music/times-like-these.mp3");
const walk = require("../../music/walk.mp3");
// const everlong = require('../../music/everlong.mp3');
// const everlong = require('../../music/everlong.mp3');

const MusicPlayer: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.2);

  const shuffleArray = (array: any[]) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const songsShuffled = useMemo(() => {
    const songs = [
      { src: cherubRock, name: "Cherub rock", artist: "Smashing Pumpkins" },
      { src: avaAdore, name: "Ava adore", artist: "Smashing Pumpkins" },
      { src: _1979, name: "1979", artist: "Smashing Pumpkins" },
      { src: landslide, name: "Landslide", artist: "Smashing Pumpkins" },
      { src: everlong, name: "Everlong", artist: "Foo Fighters" },
      { src: allMyLife, name: "All my life", artist: "Foo Fighters" },
      { src: timesLikeThese, name: "Times like these", artist: "Foo Fighters" },
      { src: walk, name: "Walk", artist: "Foo Fighters" },
      {
        src: allTheSmallThings,
        name: "All the small things",
        artist: "Blink-182",
      },
      { src: heart, name: "Heart", artist: "Barracuda" },
      {
        src: everythingIDoIDoItForYou,
        name: "Everything I do, I do it for you",
        artist: "New Found Glory",
      },
      { src: kissMe, name: "Kiss me", artist: "New Found Glory" },
      { src: whereIsMyMind, name: "Where is my mind?", artist: "Pixies" },
      { src: somebodyToLove, name: "Somebody to love", artist: "Queen" },
      { src: linger, name: "Linger", artist: "The Cranberries" },
      { src: fridayImInLove, name: "Friday, I'm in love", artist: "The Cure" },
      { src: justLikeHeaven, name: "Just like heaven", artist: "The Cure" },
      { src: loveSong, name: "Love song", artist: "The Cure" },
      { src: maps, name: "Maps", artist: "Yeah Yeah Yeahs" },
    ];
    const shuffled = shuffleArray(songs);

    return [{src:tonightTonight, name: 'Tonight tonight', artist: 'Smashing Pumpkins'}, ...shuffled];
  }, []);

  const handleNext = () => {
    let newIndex = songIndex + 1;
    if(newIndex >= songsShuffled.length) {
        newIndex = 0;
    }
    setSongIndex(newIndex);
}
  const handlePrevious = () => {
    let newIndex = songIndex - 1;
    if(newIndex < 0) {
        newIndex = songsShuffled.length - 1;
    }
    setSongIndex(newIndex);
}

  return (
    <section className="music-player d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <div className="ps-3 d-none d-md-block">
          <FontAwesomeIcon icon={faMusic} />
        </div>
        <div className="controls d-flex align-items-center px-1 px-md-5">
          <Button onClick={handlePrevious} variant="link">
            <FontAwesomeIcon icon={faBackwardStep} />
          </Button>
          <Button
            className="play-pause"
            onClick={() => setIsPlaying(!isPlaying)}
            variant="link"
          >
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faPlay} size="2x" />
            )}
          </Button>
          <Button onClick={handleNext} variant="link">
            <FontAwesomeIcon icon={faForwardStep} />
          </Button>
        </div>
        <div className="d-flex flex-column d-none d-md-block">
          <div className="d-flex align-items-center">
            <div className="music-icon">
              <FontAwesomeIcon icon={faCompactDisc} size="xs" />
            </div>
            <label>{songsShuffled[songIndex].name}</label>
          </div>
          <div className="d-flex align-items-center">
            <div className="music-icon">
              <FontAwesomeIcon icon={faUserFriends} size="xs" />
            </div>
            <label>{songsShuffled[songIndex].artist}</label>
          </div>
        </div>
      </div>
      <div className="volume d-flex align-items-center px-2">
        <Button
          onClick={() => {
            setIsMute(!isMute);
          }}
          variant="link"
        >
          {isMute ? (
            <FontAwesomeIcon icon={faVolumeMute} />
          ) : (
            <FontAwesomeIcon icon={faVolumeUp} />
          )}
        </Button>
        <Form.Range
          disabled={isMute}
          max={1}
          min={0}
          step={0.1}
          onChange={(e) => setVolume(+e.target.value)}
          value={volume}
          className="p-1 py-2 d-none d-md-block"
        />
        <ReactHowler
          src={songsShuffled[songIndex].src}
          playing={isPlaying}
          mute={isMute}
          volume={volume}
          onEnd={handleNext}
        />
      </div>
    </section>
  );
};

export default MusicPlayer;
