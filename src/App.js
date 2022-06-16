import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import { SeriesList, SeriesEdit, PalataformaShow } from './series';
import { PlataformasList, PlataformasEdit } from './plataformas';
import { CategoriasList, CategoriasEdit } from './categorias';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import CategoryIcon from '@mui/icons-material/Category';
import MovieIcon from '@mui/icons-material/Movie';


const dataProvider = lb4Provider('http://localhost:3000');

const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
        <Resource name = "plataformas" list={PlataformasList} edit={PlataformasEdit}/>
        <Resource name = "categorias" icon ={CategoryIcon} list={CategoriasList} edit={CategoriasEdit}/>
        <Resource name = "series" icon ={MovieIcon} list={SeriesList} edit={SeriesEdit}/>
    </Admin>

);



export default App;

