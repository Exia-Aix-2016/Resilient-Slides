import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import "reveal.js/dist/reveal.css";
import 'reveal.js/dist/theme/moon.css';

let deck = new Reveal({
   slideNumber: true,
   controls: false,
   hash: true,
   plugins: [ Markdown, Notes ]
});

deck.initialize();