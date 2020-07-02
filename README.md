# Metronome

[Use the metronome here!](https://meganpaffrath.github.io/metronome/dist/)


## Current tasks (Remove from top of list):
* fix the sound
  * use Audio API for sound. NOT setInterval
* keep current BPM (by one) in the center
  * center BPM will not always be equal when val != a multiple of 5
* highlight the current bpm
  * for multiples of 5: two highlighted
  * for non multiples: one highlighted


## The sound problem.
* Links & findings:
  * [Creating and sequencing audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques#Playing_the_audio_in_time)
    * [Demo: Loops and bpm](https://mdn.github.io/webaudio-examples/step-sequencer/)
      * figure out why this works in chrome and not safari
      * figure out if something like this could be mobile friendly
  * [Tale of 2 clocks](https://www.html5rocks.com/en/tutorials/audio/scheduling/)
    * use ocillator rather than .wav files
    * handle scheduling to match computer clock
      * plan future events before they happen
      * may need to use a queue
    * FUTURE ISSUES:
      * the visual aspect of sound will need a different timing system due the graphic refresh rate
  * [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)




## Layout (for personal reference)
```
| TITLE: 15vh

|
|
|
|  Box content: 70vh
|
|
|

| FOOT: 15vh
```

## Side notes
* React sound:
  * using react sound:
    * if not, uninstall react-sound
  * Sound support:
    * `npm i react-sound`
    * `npm i uifx`
      * https://alligator.io/react/adding-sound-to-your-react-apps/
