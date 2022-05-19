const soundBank = [
{
  key: 'Q',
  id: 'Noice',
  sound: "https://quicksounds.com/uploads/tracks/1262960503_2123237849_88961099.mp3",
  overlay: 'https://c.tenor.com/KMxrZ-A6ev4AAAAC/nice-smack.gif',
  delayTF: false },

{
  key: 'W',
  id: 'Wow!',
  sound: 'https://www.soundboardguy.com/wp-content/uploads/2021/04/Anime-wow-sound-effect.mp3',
  overlay: 'https://c.tenor.com/TSfv9OumbmsAAAAC/boueibu-yumoto-hakone.gif',
  delayTF: false },

{
  key: 'E',
  id: 'bruh',
  sound: "https://mingosounds.com/wp-content/uploads/2020/07/Bruh-Sound-Effect.mp3",
  overlay: 'https://i.imgur.com/qslkBXI.gif',
  delayTF: false },

{
  key: 'A',
  id: 'You What?',
  sound: "https://quicksounds.com/uploads/tracks/18341354_1319759950_1949056387.mp3",
  overlay: 'https://c.tenor.com/LYgG6pY86K8AAAAC/spongebob-you-what.gif',
  delayTF: false },

{
  key: 'S',
  id: 'One eternity later',
  sound: "https://www.sfxbuzz.com/jdownloads/Cartoon%20Sound%20Effects/SPONGEBOB%20TIME%20CARDS%20-%20ONE%20ETERNITY%20LATER.mp3",
  overlay: 'https://i.ytimg.com/vi/U7CZcd-UYmU/maxresdefault.jpg',
  delayTF: false },

{
  key: 'D',
  id: 'badumtss',
  sound: "https://www.myinstants.com/media/sounds/joke_drum_effect.mp3",
  overlay: 'https://c.tenor.com/maJMe3IR3ZMAAAAC/see-myself-out.gif',
  delayTF: false },

{
  key: 'Z',
  id: 'At This Moment',
  sound: "https://quicksounds.com/uploads/tracks/1049543310_1803579569_2048748731.mp3",
  overlay: 'https://c.tenor.com/DGA5oNttmUIAAAAd/fail-jump.gif',
  delayTF: true },

{
  key: 'X',
  id: 'It\'s only game',
  sound: "https://quicksounds.com/uploads/tracks/1658907858_376192700_1173337062.mp3",
  overlay: 'https://c.tenor.com/zm_jO7M53XwAAAAC/only-game.gif',
  delayTF: true },

{
  key: 'C',
  id: 'Tacobell',
  sound: "https://soundboardguy.com/wp-content/uploads/2021/05/taco-bell-bong.mp3",
  overlay: 'https://i1.sndcdn.com/artworks-CtmXh8lmpjsQHRQk-9QxC4Q-t500x500.jpg',
  delayTF: false }];



class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.audio = React.createRef();
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handlePress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePress);
  }

  playSound() {
    this.audio.current.volume = 0.25;
    this.audio.current.currentTime = 0;
    this.audio.current.play();
    this.props.displaySound(this.props.id);
    this.props.overlayImage(this.props.overlay, this.props.delayTF);
  }
  handlePress(event) {

    if (event.key.toUpperCase() == this.props.keyPress) {
      this.playSound();

    };
  }
  render() {
    return /*#__PURE__*/(

      React.createElement("div", { className: "drum-pad", id: this.props.id, onClick: this.playSound, keyPress: this.props.keyPress }, /*#__PURE__*/
      React.createElement("audio", { className: "clip", src: this.props.sound, id: this.props.keyPress, ref: this.audio }), this.props.keyPress));


  }}


class DrumCollection extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    let pad;
    pad = this.props.bank.map(object => {return /*#__PURE__*/(
        React.createElement(DrumPad, { id: object.id, keyPress: object.key, sound: object.sound, displaySound: this.props.displaySound, overlay: object.overlay, overlayImage: this.props.overlayImage, delayTF: object.delayTF }));
    });
    return /*#__PURE__*/(
      React.createElement("div", { class: "pad-container" }, pad));

  }}


class DrumKit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: soundBank,
      display: '',
      overlay: '',
      showingOverlay: false,
      longDelay: true };

    this.displaySound = this.displaySound.bind(this);
    this.overlayImage = this.overlayImage.bind(this);
  }
  displaySound(soundId) {
    this.setState({
      display: soundId });

  }
  overlayImage(imageLink, delayTF) {

    this.setState({
      overlay: imageLink,
      showingOverlay: true,
      longDelay: delayTF });


  }
  render() {
    ;
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("h1", null, "Meme Soundboard"), /*#__PURE__*/
      React.createElement(DrumCollection, { bank: this.state.bank, displaySound: this.displaySound, overlayImage: this.overlayImage }), /*#__PURE__*/
      React.createElement("p", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("div", { className: "overlay-container" }, /*#__PURE__*/
      React.createElement("img", { className: `${this.state.showingOverlay ? 'overlay' : this.state.longDelay ? 'overlay-hidden-long' : 'overlay-hidden-short'}`, onTransitionEnd: () => this.setState({ showingOverlay: false }), src: this.state.overlay }))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumKit, null), document.getElementById("app"));