import React from "react";
import DataTable from 'react-data-table-component'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import AdminSearchBarBooks from './AdminSearchBarBooks'
import AdminRefreshBooks from "./AdminRefreshBooks";
import { Link } from "react-router-dom";



export default function StockTable(){

    const books = useSelector(state=>state.booksAdmin)

    const tabla = books.map(book=>{return(
        {
        title:book.title,
        editorial:book.editorial,
        stock:book.stock
    }
    )})
    
    const columnas = [{
        name:'Titulo',
        selector:'title',
        sortable:true
    },
    {
        name:'Editorial',
        selector:'editorial',
        sortable:true
    },
    {
        name:'Stock',
        selector:'stock',
        sortable:true
    }]


    const paginacionOpciones = {
        rowsPerPageText: 'Filas Por Pagina',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'todos'

    }



    return(
        <div>
            <Link to='/stock'>
                <button>Formato Cartas</button>
            </Link>

            <div>
            
            <AdminSearchBarBooks/>
            <AdminRefreshBooks/>
            <DataTable
            columns={columnas}
            data={tabla}
            title='Stock Libros'
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="600px"/>
            
            </div>

            
        </div>


    )
}

