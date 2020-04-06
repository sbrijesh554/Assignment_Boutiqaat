import React from 'react';
import Grid from './Grid';
import api from '../service/api';

export default class App extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            celebrityData: [],
            filteredCelebrityData: []
        }
    }

    componentDidMount(){
        api.fetchCelebrityData().then((resp)=>
            resp.json().then((celebrityData)=>{
                this.setState({
                celebrityData,
                filteredCelebrityData: celebrityData
            })
        })
        );
    }

    filterCelebrityData = (e) => {
        const name = e.target.value;
        const {celebrityData} = this.state;
        const filteredCelebrityData = celebrityData.filter((celebrity)=>{
            const searchPattern = new RegExp(name,"i");
            return searchPattern.test(celebrity.celebrity_name)
    
        });
        this.setState({
            filteredCelebrityData
        })
    }

    render(){
        const {filteredCelebrityData} = this.state;
        return (
            <React.Fragment>
                <section className = "search">
                    <label className = "seachlabel" htmlFor="searchCelebrity">Search Celebrity</label>
                    <input type="text" placeholder="Celebrity Name" onChange = {(e)=>this.filterCelebrityData(e)}></input>
                </section>
                <section>
                    <Grid celebrityData = {filteredCelebrityData}></Grid>
                </section>
            </React.Fragment>
        )
    }
}
