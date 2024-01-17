import {useEffect, useState} from "react";

export const FindVegetable = () => {
    const veg = ['tomato', 'cucumber', 'onion', 'lettuce', 'potato']
    const [selected, setSelected] = useState('')
    const [filteredVeg, setFilteredVeg] = useState(veg)

    useEffect(() => {
        setFilteredVeg(veg.filter(item => item.includes(selected)))
    }, [selected])

    return (
        <section>
            <input placeholder={'enter vegetable'} onChange={(e) => setSelected(e.target.value)}/>
            {
                filteredVeg.map(item =>
                    <ul>
                        <li>{item}</li>
                    </ul>
                )
            }
        </section>
    );
};