import myEvent from "./event.mjs";
export default function produccer() {
    myEvent.emit('produccer', { msg: 'tome su data' })
}