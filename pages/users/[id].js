import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import styles from '../../styles/user.module.scss'
import MainContainer from '../../components/MainContainer'

export default function User({ user }) {

    return (<MainContainer><h1 className={styles.user}>{`User ${user.id} Name: ${user.name}`}</h1></MainContainer>)
}

export async function getServerSideProps({ params: { id } }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()
    return {
        props: { user }, // will be passed to the page component as props
    }
}
