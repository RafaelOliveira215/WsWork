import Head from 'next/head'
import * as S from './styles'
import Table from '@/components/AdminTable'

export default function Admin() {
    return (
        <>
            <Head>
                <title>Admin</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon-admin.png" />
            </Head>
            <S.Body >
                <S.Header>
                    <S.HeaderTitle>My products admin</S.HeaderTitle>
                </S.Header>
                <S.PageContainer>
                    <S.Menu>
                        <S.MenuButon>Products</S.MenuButon>
                        <S.MenuButon>Company profile</S.MenuButon>
                        <S.MenuButon>Logout</S.MenuButon>
                    </S.Menu>
                    <S.TableContainer>
                        <S.TitleContainer>
                            <S.TableTitle>List of products</S.TableTitle>
                            <S.NewButton>+ New</S.NewButton>
                        </S.TitleContainer>
                        <S.Table>
                            <Table />
                        </S.Table>
                    </S.TableContainer>
                </S.PageContainer>

            </S.Body>
        </>
    )
}
