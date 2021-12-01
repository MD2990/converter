import { proxy } from "valtio";

const state = proxy({ up: "Meter", down: "Meter", input: 1, results :1});


export default state;
