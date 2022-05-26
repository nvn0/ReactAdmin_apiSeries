import React from "react";
import {List, Datagrid, TextField, NumberField, DateField, ReferenceManyField, ChipField, SingleFieldList, ReferenceField, EditButton, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput} from 'react-admin';
//import {ColorField, ColorInput} from 'react-admin-color-input';

export const SeriesList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Nome" />
            <NumberField source="Temporadas" />
            <DateField source="Episodios" />
            <TextField source="cor"/>
            <EditButton />
        </Datagrid>
    </List>
);



//<ReferenceInput source="id" reference="plataformas"><SelectInput optionText="Nome" /></ReferenceInput>
            //<EditButton />

//<ReferenceInput source="id" reference="serie"><SelectInput optionText="id" /></ReferenceInput>

export const SeriesEdit = () => (
  <Edit>
      <SimpleForm>
            <TextInput source = "id" />
            <TextInput source = "Nome" />
            <TextInput source = "Temporadas" />
            <TextInput source = "Episodios" />
            <TextInput source = "cor" />
      </SimpleForm>
  </Edit>
);



/*
export const SeriesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source = "id" />
            <TextInput source = "Nome" />
            <TextInput source = "Temporadas" />
            <TextInput source = "Episodios" />
            <TextInput source = "cor" />
        </SimpleForm>
    </Edit>
);*/


