import React from "react";
import {List, Datagrid, TextField, SimpleForm, TextInput, Edit, Filter, EditButton, NumberField, DateField, ReferenceField} from 'react-admin';


const postFilter = [
    <TextInput label="Search" source= "Nome" alwaysOn />,
    //<ReferenceInput label="Series" source="Nome" reference='series' allowEmpty>
        //<SelectInput optionText="Nome" />
   // </ReferenceInput>,
];

export const CategoriasList = () => (
    <List filters={postFilter}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Nome" />
            <EditButton />
        </Datagrid>
    </List>
);


export const CategoriasEdit = () => (
    <Edit>
        <SimpleForm>
              <TextInput source = "id" />
              <TextInput source = "Nome" />
        </SimpleForm>
    </Edit>
  );