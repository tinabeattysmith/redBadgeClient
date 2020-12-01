import React from 'react';
import { Table, Button } from 'reactstrap';

const PantryItemDisplay = (props) => {
    return (
        <div>
            <h3>Panty Item Detail</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Importance</th>
                        <th>Comments</th>
                        <th>Is item used?</th>
                        <th>Associated meal(s)</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                props.workouts.map((pantryItem, id) => {
                    return (
                        <tr key={id}>
                            <th scope="row">{pantryItem.id}</th>
                            <td>{pantryItem.itemName}</td>
                            <td>{pantryItem.itemDescription}</td>
                            <td>{pantryItem.itemPrice}</td>
                            <td>{pantryItem.Importance}</td>
                            <td>{pantryItem.itemComments}</td>
                            <td>{pantryItem.isUsed}</td>
                            <td>{pantryItem.mealId}</td>
                            <td>{pantryItem.categoryId}</td>
                            <td>
                                <Button id={pantryItem.id} onClick={props.delete} color="danger">Delete</Button>
                                <Button id={pantryItem.id} onClick={e => props.update(e, pantryItem)} color="warning">Update</Button>
                            </td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    );
}

export default PantryItemDisplay;