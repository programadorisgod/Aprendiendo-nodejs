import myEvent from "./event.mjs";
import produccer from "./producer.mjs";
import cariculetico from "cariculetico";

myEvent.on('produccer', (data) => {
    console.log(data);
})

produccer()
