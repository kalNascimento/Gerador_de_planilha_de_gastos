import express from 'express';

class Controllers {
    
    static SomarGanhos = (req, res) => {
        console.log(req.body)
        res.redirect('/');
    }
}

export default Controllers;