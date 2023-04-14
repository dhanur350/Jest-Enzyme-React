import React from "react"
import {sum} from "./sum"

let data = 12;
test("first test case",()=>{
    expect(sum(5,7)).toBe(12);
});


it("Second test",()=>{
    expect(data).toBe(12);    
})
