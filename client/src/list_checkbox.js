import React  from 'react';
import { Form } from 'react-bootstrap';


let CategoryBox = (props) => {
        
    // add or delete category from  list of checked cat   
    const handleCategoryBox = (event) => {
        let indexBox = props.selectedCategory.indexOf(event.target.id)
        if (indexBox >= 0) {
            props.setSelectedCategory(oldselected =>
                oldselected.filter(id_cat => id_cat !== props.selectedCategory[indexBox])
            )
        }
        else {
            props.setSelectedCategory(oldselected => [...oldselected, event.target.id]);
        }
    }


    //render value of box in list of selected items
    const valueBox = (table, id_box) => {
        let indexBox = table.indexOf(id_box)
        return table[indexBox]
    }


    let checkRequired = (table, name) => {
        let a = document.getElementsByName(name)
        if (table.length) {
            for (let elt of a) elt.removeAttribute('required')
        }
        else {
            for (let elt of a) elt.setAttribute('required', 'true')
        }
    }

    return (
        <div>
            <Form.Group  >
                <Form.Label >Category of Car: &nbsp; &nbsp;  </Form.Label>
                {
                    props.category.map(cat =>
                        <Form.Check key={cat.id_cat} inline>
                            <Form.Check.Input required
                                id={cat.id_cat}
                                name='category'
                                checked={valueBox(props.selectedCategory, cat.id_cat) ? 'checked' : ''}
                                onChange={handleCategoryBox} onClick={ checkRequired(props.selectedCategory,'category')}
                            />
                            <Form.Check.Label> {cat.cat_name}</Form.Check.Label>
                        </Form.Check>

                    )}

            </Form.Group>
        </div>
    );
}



export {  CategoryBox }



