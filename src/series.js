import React from "react";
import {List, Filter, Datagrid, TextField, NumberField, DateField, ReferenceManyField, ReferenceManyToManyField, ChipField, SingleFieldList, SimpleShowLayout, Show, ReferenceField, EditButton, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput} from 'react-admin';
//import { ReferenceManyToManyField } from '@react-admin/ra-relationships';
//import {ColorField, ColorInput} from 'react-admin-color-input';


//const PostTitle = ({ record }) => {
  //  return <span> Serie {record ? `"${record.serie}"` : ''}</span>

//};




const postFilter = [
            <TextInput label="Search" source= "Nome" alwaysOn />,
            //<ReferenceInput label="Series" source="Nome" reference='series' allowEmpty>
                //<SelectInput optionText="Nome" />
           // </ReferenceInput>,
];



export const SeriesList = () => (
    <List filters={postFilter}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Nome" />
            <NumberField source="Temporadas" />
            <DateField source="Episodios" />
            <DateField source="plataforma" />
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
            <TextInput source = "Plataforma" />
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





/* export const BookShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="Plataforma" />
            <ReferenceManyToManyField
                reference="plataforma"
                through="sp"
                using="sid,pid"
            >
                <SingleFieldList>
                    <ChipField source="Nome" />
                </SingleFieldList>
            </ReferenceManyToManyField>
            <EditButton />
        </SimpleShowLayout>
    </Show>
); */


