import { getAge } from "./unit2";

descibe ('getAge Unit test suites', () =>{
    it('should render...', () => {
        expect(getAge(31)).toBe("Vous avez actuellement 42 ans")
    })
})