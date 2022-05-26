import React from "react";
import {List, Datagrid, TextField, NumberField, DateField, ReferenceField} from 'react-admin';
export const PlataformasList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Nome" />
        </Datagrid>
    </List>
);