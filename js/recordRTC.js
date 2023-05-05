// window.addEventListener('load', initAudio);

// function initAudio() {

//     var mediaRecorder;
//     var recordedChunks = [];
//     var fileName = 'recorded_audio';
    
//     navigator.mediaDevices.getUserMedia({
//       audio: {
//         mandatory: {
//           chromeMediaSource: 'desktop'
//         }
//       }
//     }).then(function(stream) {
//       mediaRecorder = new MediaRecorder(stream, {
//         // mimeType: 'audio/webm; codecs=pcm',
//         // mimeType: 'audio/webm; codecs=opus',
//         mimeType: 'audio/webm; codecs=opus',
//         audioBitsPerSecond: 256000,
//       });
    
//       mediaRecorder.ondataavailable = function(e) {
//         recordedChunks.push(e.data);
//       };
    
//       mediaRecorder.onstop = function() {
//         var blob = new Blob(recordedChunks, { type: 'audio/ogg' });
    
//         // Download the WAV file
//         var url = URL.createObjectURL(blob);
//         var link = document.createElement('a');
//         link.href = url;
//         link.download = fileName + '.ogg';
//         document.body.appendChild(link);
//         link.click();
//       };

//       document.getElementById('startButton').disabled = false;
//     });
    
//     // Start recording
//     document.getElementById('startButton').addEventListener('click', function() {
//       recordedChunks = [];
//       mediaRecorder.start();
//       document.getElementById('startButton').disabled = true;
//       document.getElementById('stopButton').disabled = false;
//     });
    
//     // Stop recording
//     document.getElementById('stopButton').addEventListener('click', function() {
//       mediaRecorder.stop();
//       document.getElementById('startButton').disabled = false;
//       document.getElementById('stopButton').disabled = true;
//     });
    

//     // var recorder;
//     // var fileName = 'recorded_audio';

//     // navigator.mediaDevices.getUserMedia({
//     //     audio: {
//     //         mandatory: {
//     //             chromeMediaSource: 'desktop'
//     //         }
//     //     }
//     // }).then(function (stream) {
//     //     recorder = RecordRTC(stream, {
//     //         type: 'audio',
//     //         mimeType: 'audio/webm',
//     //         sampleRate: 48000,
//     //         bitsPerSecond: 256000,
//     //         recorderType: RecordRTC.StereoAudioRecorder,
//     //         desiredSampRate: 48000,
//     //         numberOfAudioChannels: 2
//     //     });
//     //     document.getElementById('startButton').disabled = false;
//     // });

//     // // Start recording
//     // document.getElementById('startButton').addEventListener('click', function () {
//     //     recorder.startRecording();
//     //     document.getElementById('startButton').disabled = true;
//     //     document.getElementById('stopButton').disabled = false;
//     // });

//     // // Stop recording and download the recorded audio as a WAV file
//     // document.getElementById('stopButton').addEventListener('click', function () {
//     //     recorder.stopRecording(function () {
//     //         var blob = recorder.getBlob();

//     //         // Convert the recorded audio to a WAV file
//     //         var wave = new Wave();
//     //         wave.toPCM(blob, function (pcm) {
//     //             var wav = wave.getWAV(pcm, 48000, 2, 16);
//     //             var url = URL.createObjectURL(new Blob([wav], { type: 'audio/wav' }));

//     //             // Download the WAV file
//     //             var link = document.createElement('a');
//     //             link.href = url;
//     //             link.download = fileName + '.wav';
//     //             document.body.appendChild(link);
//     //             link.click();
//     //         });
//     //     });
//     //     document.getElementById('startButton').disabled = false;
//     //     document.getElementById('stopButton').disabled = true;
//     // });

// }


