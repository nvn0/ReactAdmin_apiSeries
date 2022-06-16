import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import plats from './images/streamingplataforms.jpeg'; // gives image path
/*
import {useState, useCallback, useEffect} from 'react';
import {useDataProvider} from 'react-admin';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import NbNewOrder from './NbNewOrders';
import ElementosAulas from './ElementosAulas'

*/



export default () => (
    <Card>
        <Title title="Bem vindo" />
        <img src={plats} align="center"/>
        <CardContent>Plataforma de gestão</CardContent>
    </Card>
);

//<img src="./public/streamingplataforms.jpg" ></img>
/*
<div>
             <img src={plats} alt="this is a plataforms image" />
        </div>
*/

/*
export default () => {
    const dataProvider = useDataProvider();
    const [state, setState] = useState([]);
    //const version=useVersion();
    const fetchAulaStats = useCallback(async () => {
        const { data: aulas } = await dataProvider.getList(
            'aulas',
            {
                //filters here
            }
        );
        const aulasCount = aulas.reduce((nb) => ++nb, 0);
        setState(state => ({ ...state,  aulasCount}));
    }, [dataProvider]);
    
    useEffect(() => {
        fetchAulaStats();
    },state.aulasCount);

//    console.log(state);
return (
    <Grid container spacing={3}>
        <Grid item xs>
            <NbNewOrder value={state.aulasCount}></NbNewOrder>
        </Grid>
        <Grid item xs>
            <ElementosAulas/>
        </Grid>
        <Grid item xs>
            <Card id='c3'>
                <CardHeader title="Yet Another card" />
                <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card>
        </Grid>
    </Grid>

);
}

*/