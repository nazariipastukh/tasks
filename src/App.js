import {FindVegetable} from "./find/FindVegetable";
import {FindUser} from "./find/FindUser";
import {FindTodos} from "./find/FindTodos";

export const App = () => {
    return (
        <section style={{display: 'flex'}}>
            <FindVegetable/>
            <FindUser/>
            <FindTodos/>
        </section>
    );
};