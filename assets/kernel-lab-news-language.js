(() => {
  "use strict";
  if (window.KernelLabNewsLanguage) return;

  const COMPRESSED_MAP = [
    "H4sIAJG+ZmoC/9U9y44b2XV7f8WFF/YMQBGWbCcBNwanm9Oip19pUrJneVl1SZamWJdTj25RQQB7YziLAEG8C5KFdvZCC0OLALMJYP7JfEnO476qWEWyu9WDZCM1q+7z3HPP+5z6px8J8ePt73MlxTrXpVoksRR/+28xjCJVaCFTcS5nOpelzhMtxlmp0mSh4L8fD8SPr7FHVKpYSBwAulEDbuE7boTE0Yof93Cy7//wb+K1Tm9VLqRIYVqdlzKWOB6++kJG34hSi3KpxFKv1FouFHfs6NTdYfv7m9FQXN9cTUdn49MhrRh/nExHp2II72yz2u53N8bN9sChfdfczQBSvY3SqkhutVjLXIoku1VFmSxkrHNVCFnhuO/gV9GHEUShimT7MYP/RaSzQuW3Mt++F6sEZshlIdYqX8lMvYskgLZMbgkmtlOsUpHJW0WD93F9IzO5Mgch5jrHOZc4KWwSlqBkHi1VDtNPAY4wVJHoTNwlaQpvVzLJeCIl7pZJqgjYs1zfwdJc46QQeq2yPu/7ROe5gn2nAMcclpVEmpYCY6VCxnHuEOJE06bU9q8Me1kUdzqP+eWFLuBljmAIG02W+g4gGbYcwxSJzC0YqFWygGVl/P5GRRXAbXcseKERserDnetCxHCOBQxQ5jquogROR6gMQF2ISKZRlSKA4QecEmAPAFbCSw2vVogY2DQ8CbERmca2KrvdfoCmcLfwZBN8h2d2lldrLb5SeaZSOrZTWUqBQ+VwRnACCHQzMaBLgbhpJi6gAc2cbmxDezoyIySGuUuYDhDUXJVRaqaiRai8X4eiLJKitPg9KWVewiN8JrPSHtsKUTkXC1x3ge34kYInuloXFuypjAA9oCEgcSJnqSoY6rALFTyj1qeqiPJkluSiyqR7ScDgN4DC/jGvo4IlJaWka4BHm2SV5NXQ37oqxLe+TVuvOIGxVUm9Tvlv1d4ntV0yvUoymWKPS/4TO6Sd7QGvbPsr/nO3/dVOGwMUwDsP5OmdrgF4igQkeL3MldptoMVq+363HaDeSjdObJzFCu5xjMSGz8o+Ufbs3aHGMjhMc3Mm2w/is0wDhUo/x5dfw/TuN7W41PhABG34Sfas1owGSpNMhQPR77w+UNDGDFRr9RrxJXsHNzVZAMx5TyMEP6NSFln08y3jZA7XzgLgNJnzz2aHCdI3ggQhrF5HjvYQ5YPrBw9LaBDyMMu2LDATvnQMyQIvm31TVCnwOQ00OALWlsXwtyVZK/zNxBsacYfrvFIzGbSWzdawIdN2Uq0r+MHYMCyKakXrdEgAZGeNl8LtyD/y+xnBauPtB2BlwIpiuqJrxHd/Y9fENQrshK3M8F/CEiuVwa5pevj5Lf20cJ3C/cYBxby94UaUngL4wYBJVSuky0wA6G+af277cY+XsBa9yOWK2rlfhuWoOKHnF0pmwaPMPMQ/LXPiieB/VUcgfPraoIqjbLcJA1MA2Lfv4XhyQ1zxzxh2Cw08aE+0mgNaECuJDaF0Z4EvzVuh5/zSd72R2YLxBP4w819sP2TJip5eAL6tKrvb7fu39rl865+fSoMayIXMipj30KrN36UZ/TxZrQ0Gn6Rw8zw1l/kCSH9uMZlG1HdZqmUddX1bkFZUWmvHTxrNri/Pao3wN6Puap0nK2AhQCcrACy2Pf2SxboE4QUygkRZqKDnjXsMcgBfIhWgdnihPS4D/fDXaZoA845VjWe9Nn+LcrM2gLrcfrdSObX0tPiyWs2AVcNB7nJOwheQQML2RG7xri6TtZip8k6BrBF2vSQyCsJszDSRfpUbe1ZILe1L+pW7ly/1SoMcq/C12w5SRLoo9mW5cVjnaSETn4IE3NX2L2UOECpYooMHCn8TvBrNM73b41Jn69ZOyAqdyCCigIk73hjy7R3xot4d0Hex/ehmxd70TOd0uI3OrwKJpDY1SHZI/IPhiIVndRmCJDGdqdYpjK5Q6CipnXn3YoFiY2NEA4cCexY/BVq3/asmQVPN",
    "AZFZGp/jn6IALcCs4GT6angOytJpT4xejy6nVxPxtbgZTV6dT4enVxM6nNFvJubtRAwvT83ridV3yoqxqyfULewCQL7x95+PV90V5m1BYOHXDnlLZIdFIBQ7YZUW7STXG6O3QCvAfYHDGtwCFgpjrElIUSTCQw8WWQAkPbGuZimAiV/3YKa5ygqJL3K9QejAn6Tw4EZUQZwIbxGfDXCfXGYFiQTIdYgObz8AQZZ9xykzOhs4ibVdDP52U9P97aEoDlK1WYDiBbyBBeCrHNSuJFuYhZQJvkZoFTRfAtOJbzJ9l6p4odyKjBx/dvPq+kqcjsT48vVoMh2fDU/G2z9dEvUYTUbDm5OX4uzm6tX13uZidC6+Gt1cjs4J8PaHaBui/YzM1bkcvx7dTMbT4VRcX52Pp9s/nlyOT4Y44+vh+faPlyfjIdoPnr/4/nd/ev5L8etX5+Mr8eJnL/4OR3tI96+5N03/29++Ho/HAhSCRY7K+DhEBzZbAD0vQQkXrzK4qnkBdxb1fDj2C7hTIDqTgHMBSJqgspCsQcAEVvHZ+OKCxM4X/1AuRf3YzWwFju9G3bipFFLQ5oAbnG4J+jZKSmZ0FnFewRavLkcTcT2aXMGVvNj+y/QKLqQYT0c3w+n4Nd/N34zGZy+nAptPoT3fT9tkJC5G05dXp+amnlzBWd+cjQh451cnw3MYd3i5/f35eDKeiMtXMMfN+OSKuAS99j1GNDA0GUELeDO8HJ5/Db0M5xpdI4ZcTg0WwTF1INLp6Hx0NsSlcs/n4gJkdLjaw744V8iOQfidqPX2O5CbYzgB4BIa9fAEQI1kVRN8SVldMTNhZUDR89HpNRGcQ8OOzWhKAMtZ6pg6OzVCFBscnh5en44MjXkhLkEyyiSM+ipHW4I4kXC0aarFFQi9q+SdoRbQS6ZIlssVrHa5/TDLyZQAz4GLFMkzoFulJrHuiDGJ4EPX5QaHsSMveXXfhuPRKn8uhlm5Qlqp43z7AYDwDsac5YCgw2z7Pk2Q+mQVcF9gGxrHQLlnlhAFx5+gh27frwxP2zMayDCKOQ+sP93gsHgwPBbgPQ61yeTKqQCejDsCiSYTfwFgKBSs0xRpYJKJUbaA44BJ4OdPxMtqBbrVF2opbxNd5Y5WtAxbEgd43MhOKQI9AbXCNubkZ8x1xpYiYUgPKA2RMc6Ji4vRT15+QcP2BAi2CuAXS9Pe059SXGuA3PbPUcbKlXgt0+2fkeH00M4R8FRR6BkIC6vdy9Ej7dPj4qb1qvRZsUEhtECy1ApDZ4IiWgcbIkxEIub3I2DV2OTIXazR8IhGmoWVAATaEZuX0W+COSjywJ3LafjeORwj2rpQgkCFFPRXBO73f/h3FpwBqedKlhWa1DKQF+iNVYTwVEuZIvEwHS7QOIIPkzRo+lrlviVsKZVuyifC6teJunPrAJgjkGn5AKyVeEqcv5Y4rpdwSG6ceAlkLR2XP7v6YgxkneSI8yEICdfb//jinPj01cUYGfYlcemL0eTk6ymOc3YF/OTyAjiFuPpSTF+OfEvs/gp7Bz0MM+/k5HAUY2tYZ3w/8ZIZ0dfnRdnFpgGqwbasaGnVQwCPFKdo6YOhMkJkHBuPfCOmKsp0qhfbD5KvASx5AmRCc4+F7sF4wGxI8AtGYf3V/OLZI9YTYMQlDbkRv1Hqm65RfWcYn+RKc2hDZK4nYwDs9l+/BB6OjFawkHeUSCcm1HkMfQUNFpgS1yAzk0HGkB25y0d67Rx5U6dG3gxpCAELxUgDsh1u0tu98kwJQtrQ5CyFBlwAhRX0M0bUEJGNgf4x+ORnWuoUpAYZyuY8oaGID8W8keUyu2upb7O61e27TJhpgcCz1jmoCS0n2Mo4jjlBEVfEDh0cAV0IVXW+kBk5tGhWeI1XeDPt85mH7oeGErdUadwGx0ijWadAclW240wL3zgCZXALPKg5pOYegFHMNm75x9P/p8a9Y1nCU2FmpyQIumyCxmah3iagSEv2hhUV2nFQ",
    "1dWgXufs5ugco6jIUTmv0KNFyjHsYRn0NoqzuySneV/sWxH6M7YfDywJ0XtGNylFc06KuzbAJ++JBHFL6BIRI5YWsd9UdLnUrUwr53Hdu5yWzQGStezO2EYiBUgds4M7WcCbUuCFBsp7B4oM4ye+VG/lii0GaO9PylKpwwj7KY5xPyp+okO+ANR79pXCtr9WwPGul6BYrNeKf0VVil44XJ8x5vhRUFiGHa/I0t04WLZ77x0ZCE+qUJ6qLc1YbMQdKF+7R1PDy2NW3oKbzX0A7UojtMVm8adB0P3rqp2OBULcCoSeQVJLRz89lj7d4e/H3SdDjV/rYvsXMUxB5QKB7kZtYBD+FygQsQ04OWbbAIlTGtooEtYchauHYVTrKECoM6T618vTuh5QJ5ndyziWZvZwwSpDUvFpsLJzS0eTzadHx090evtx78Fn22lDsiITxhKt8+1HvBF7yHrnOBQWVGgUnugY9nBmDpexk2GsDGpScESdg5MDnBbIi0W8asG6SOU5vQPxKkoi6Iia/vYvK5SucpUCYuHGKNqqLbhmbOJpSJUSd6Bk7VsU7bh7sz1LCshcD6LoigLUspIWpWBNItpEKTkRGtE3dfH3MOp9qsPdj3uf4OiNxdWaW3stcsBmZx7L4XjNeYQBTDkIvUDhtfWcxCQ9W8vI4WlY5m/ORIMVRJ8TPJMkxzgpgHFKlnlvADmnELBauJ41JoMuniW6zaLc65Z6Nt3A3bv7UHvwkAgUMPLv4br7JpDExvQ9ar3t0HNLXqIn3cCSZVQHzUDhaAD2CH7/wyDPAeb/1Kg1Ie07lTWbOwJCkxd9+x4d4JpggxGiEo3FuRddrpiEeRs7DF6odP4MozxTUoaBHBlHOuCBtWUZWABrB9rpIVR0rCZcSbAMEw3ZYjsQt+hBzROyGIDGDvr4Cn+KqiCKvUTSTbGs5OT1LgYXiNdn5dBB7Q55iEMyfc99C7uETYpKLa9u11wAy8N+sQ0AtO4KUWqdFodx9pGnuR8XH3bWZxWaJE+TePs+MiFa4nz7cUHOzMCxiSZMnWNbtGvq7E2VmeifqZLREoc+qxJ4B5JIzaR8rhd4veESTFSJocMu7nmCoMjeAZIBRB63DnZ3qDdwpQHQTdc8BhdEVV4wlKWY4YJTAonGmFs44RQQPXTrcrxd6oxRD9gkoSSKGbJQcY9FffUWV0he/KbLHg08FVAkDr0uFGwoRncvvrPxxRQpX3lPsYJnZJE5jHqPP+f92PdgLBi209/h20Svdu3HaGyo350KTcHqFqXCbyuYz1MZsf2IVjwSsKNKooysQa7PjMQHj0zsR9PPNTQ0xdOTxC1oh7I4XyaARCJA2HYIe57DeZbLZzhnSEsK4LgrlvO88VF9W7GZ8ggi4qYe1qa+hKm/5CmvaMorsw7vup7Q1IcP8/FTNI4WgF56tOIwNTGHS1Y61+Q61+tE8YUFUXkG2jpxCNp+BCoCWqWf5WqB8YV0qUF7miPDoSgnzIsIzw5OjMY3gcu4Qbw8OqsNntK0oD4lirboJqAZcUoKjjeBVIAIMOd6ecQhkahe8KWfYgzcIlXPvkSj9BmNgAtZP7sxk53wZIcP5mHDssp3NR2fjIeTwM9zhJMHI7m4/9/+5x+rRCHk4ZpRNJsjsV6vgocY3k9ZJ98CxfkVRZzoKo3FRldwy77By+xVHkMEN0gv5HqNNwFYv/qV8VFVCrFBZbcJ6LMkZAchVow2kbGNY1yU9VkcF7yFIdAZnCuJGRrj30OecZtklL6BmRyaVdR0+wHuKp10Ure7x6TLA1ITCn4NO13JDeZSxCAx2FWTK0HOdFXiiBwZxuFcgZfiHsFfZKVAz3ce8BJkOISoJoeDkP+nhcvfIUJn8XdEgLU4S17barZKSkK4WhO8JRgKTtfX4jiaaSLK4Qm6SsZW7KALuF8z4FKY0ONvTO1sHMqH2/ZJP7AxPbCZGvBjYF6heFhb+EmKphB3UcJm7rUbloIigMdifALcMeL0",
    "vBB4BA/4CWj8M/itgmBn2BagRbK2GQJfqY2Yw7JsTOHwBu/YtYlpGl9O4U4NMSpreB7Gnp2OTPQa/GH1DNN4yo3dSPj7oWFrB6LOTDiVGRjO9U2VckCbXZObtEo3waTP2xs3m11fXXLg2HNOq+NwL9rQ80aLFzstXjRa/Hynxc9N2FuVGS6+RgBsrLYhJiCMLGH9k6WEy4cr/bZKMisDEF1SyWJZijmMwB5CpPV4aebJ3PHtxjCsCBj21hayFcZrEeWgG4KSG/MImYZLeMkhWmFQVhivRXQebZNmMW4smyMB2kcKNxEjrkERR28q7XSay2oWwKJDEKL4CtsVaAZ3m+OgG+8FbUoyIQgMU0EMhYP/pY39db9bGv2i0egXO42e/z3fkEt3Q2oDw2t4NwomOMoDbuNe0FzdEXeVdnlaHxoj81kQ+PR5r8Xl/dCoUhY2joqhOuxP74zg6nD5flpoeDv7w0Jg7xNP1nf4Ary3wvh5SrfkCDtADESB5y8w7bKFIhq0GU0nsDzk6Hw4PTGK0YIFDZ+PetioEYS39pHmiGbM7onBbGhIkir6eDzANCnjCEAZpdWGFWObs6uKtaJeNyrCnB4Z31JmBcLdi9/XJtmTtciJTsnFcen0DHg/SykWzmDFSrFJGpVVCqyY53qFQACcDEm/hTPI91qneCxjK9ZEIIR8USVpjOMgDJIaDIiIJdkzELMLJG+U44DLqYe9c1qxAQFDIDYubbtzm0b8iSBgcrZBNrIiWEOaQ1UTXf1OFmwGVQIx5hRIPMg5E2Nv5jKi47zGoXreHEZqaFsMDeENYPOCo8cobbdX03s37fHCgKm14Bt3yqwDwcbUguVQs2PFwQMAzNboSt6SMozorsEve84sVtdlXSANLTzYi+p5vZmNHiZEuRZt4/mfO6JC+BMiSK4455sdt7RePjrDCNkuIO2RtBwDJeSQTqpYOGiDOF9DcluiNSYx/a0VtAjGfAkDnuGFTmvGitRYHBoTuHOpRygVS31nUN5uxJwFh9FKy5tbj4NV1V2gs+qrVmY/MTsyM47OdQYNP8xLGuiMhwvUf/aF+WFJGuj7JM8moZujfysF7KJqDKR38YukEcVkb9sGrfLmrnFLPLeGYyV+BNfcPIBvJkWdTAEGg+K2AGAAqEINK6ln9OSgV6QcqZmUSAjSlMs+cNEEOL+gpAIT3UfwQCO43osJUubV4FHxv1w6Agd67Di8JCOKDcRevYZnZfwd7JNUzLBfqmgpi4HoUnVsJQUVtHF8z9KgaiHzwSHmfzxivVZZpQZHcdP7HOqVkTANGB+VtNTnKgMspMHeH5Gh1Lfpqk1G64XSwf78mz2O902nY7JfD8D17O/BkzHX6p7PV4sBXDo6Zra3IyOEzKLJ+Xc5/JDnOy66dZeL72PQIWfuP1jbekQcq/gsjBr+3GaMiojq3KSGot83+t5pYi7YCDPeAULmdozQscJrmWBJmETnvY7xeAGtwfsPVL3uHW0rPquFJX/eY15tIEQAw573yCPY0c0YPDk5FV9isFTOMOJ0m47xjNCwm4LgZe+GzOCFgQKTagqZ58A4EYlAJdvVyFZUaaFU9w9rpxpK3oBtYuMlBUvwUiSwcAyQYYsKvlsC+xYbKiADKzJRg6YKDucSgeyaK9BaqFyP+OXPBOs8bHg2lkNT+Qc0C1679RxcSHhGHpJ6FJhDQLz65B12MMtKm7gMkLLO9qCnXJM/jRe9WldlyEC9WlBDQthVYMnDQHpdLZb3D7dndc7Z90FaplpZawPVUqUbSnVfogyAeIMKqCxLDtkDrGNLOcFQr1OgTFhiCjoh4Cgr3MlMFzh2DiLYtVMexZB1w3hHTNLlkgo5ORA6CJorCEsElSemxgZq5hau/FD9WgBTR8qogQcFUYQ2Oi/bNnQSxP7jzJcN3RG9oq3uTLZAMB4YtKa7wjowxyFwTYsE1dwi0rQMEECAH+SFjXQgm1U/iKXav2OEnuEzzyyfCfZv1ZmjTK3s",
    "DTfZtdCpxWXac2eGXiS/ZnhQmMMDwkW7qwq3NQOD/nEBkXCI5GUu2hXv462+osQqII2t0mnW02YwKAaRMk8iPtb+3nhLD3n0QC+PMCvXl/AM64+0m5rpBOAUAdJUb0C1SgWdwWwegDvZqKGK3m7C3mMiCZTzKjtk6WbdMtDMTTyR7u/NMQmtJM48Eqy1aTPvsIN4vdvUeuqwqTtt0cQVOfXbS15MeucVquJcMMywt/0Xc+O08YStinFyW6XefUkRSK2GLceR4ZYV2w9IEinY9nb7IeOgQ+aDgWMWXYR8Vxq6u8raMwFrmN8T0GKBGc+9oDWQ3Zy8cr0uDqe8yBa08JYWAtwd2eQYcKVJ29oLOCqm4TR+Y5wBClMoTCcIKZn3tNbsad4AkGUq8to/dnHlO5CuwbUNLQJJe4ZjI83ZAorA8zZoZyliwLNYoA8e7IQPWZPAJ5LVQ+vA44Xavs/xQdGOFFBe1OC+4r+J7mYdlhczx6i4O51/M7iHmNyudD9Yk/iMMwhBfD/TswQgpQ8qF4F6/iAJPZwSdMBsZVSFvWI72VPM0nbk91Cjf95taqnVEPhpw8Y2CEVQOylZRwA57ynnU0k46ju4twhrPP8tKsHAKQTMQLxYSxoEb8KKt5ZDek0B7w8P06Uw8N2hZiROkWCMEu2gKRi321aezJxy+v/HiNJgKzUL/6ZbGHicMaVOoGumFdx1B2c/MTzJ4JkLpzoAY16wyx+xjO3w4Rw25Rh7xVzBvU9KjJzfn0CLV4/qMXJynckIw4F3c2iR7pI77fvf/eeoHs3ZFitOQiDyIirufFjp+f53/3XY8kJxY7KkAoXF/q3ZkE+XXObS94CItab6wL4mYRi2905eBB4z65uceO3GuylHLiAUtuOcLCiogaARuCwpQB9TiWCBySKjxDoKfiUR08h8HOJmSHYjdi0Up7oEtNZL2MwBIL+rLeWm08pxhNZ6Mmh/sciC0ubMCKYPTQ7EeL55qt6Eqa/10MQedsuThSZxG7aTUvgzUjxkZBgEmu0UayP5F+S0mXzj86eMLkzOIYx6VreKGOdKfqMoj94eRFZyJelkRnIG6qdemMSjX4VOExej1yH7tZAkU9u5abVtUipRMKqxUcZi76PSxg28o9KmULqYTi5avLHeYRQ0eHsI+p3ydCYPL1JW7EAhrF8vu24sZ4M25PRRTiF2sq2CapLDEIMWcBrBvAFRM/EUbSPGfjpoInonieqsm3RiLLGlXifRoJ6hsZtj0qpEWosp3X6fxji4XzZzxy2qs5EAowfHZiw3EaaZKDterSmUs4MkrSm7wdjFGpdvNy2Txho0bhJRaI9WICKtKyfKHsilPMwGTQ0uBFnaOAJa5MFc+R6a71RXKn/AOOMnLTqxnyXyJpEf1i50SOLQjXB4r3dLfZ/iAJ+siMWkQlq9MbllNfMDBlLZ4AJ7R3ZSEoip5VVUVli032jXWE4VJDm44RHZiXvHZSMI6cysJKtYq0ZfBHy8FiMRs38VyUzzEtgACTTCaaREpH9w6JiLDGPbWcMHsIatiJhD3WAVwT16mQRh4bA9LIuWOEMFgJuuepg90fMgERZOBI+lAQ5ypGYGBVN8zpsIMylodD/e2oZliR222hVxEVz32Lmm2WxvoFQyO7bggVkBHKpmA6kFxtOiksCP2cWIdpNZNl2o02RFtXQUirFpgakl93zABqeoMyJZiI2IFDvo2A/L/+KHH2BvA3MG9ePCBewc2XFE22BfgNr3pdddlOinDoD143mw1tJdjOEeakuPqG9Fgtrj5dWHaCid5R7ur6HcLZNo+QlpLsnHDQpbi4ULtAm0NbcJUWkyM+6SGIS1W8y9YZjvhOaxyN6Qy0z+XzBVsTfTr5MO75NG9hLi3cQgiv8NQt+cHVXVo+AcQUbpt4UKt6kDDCQUHZ/N0XbVoh60BGDaULGaEOqH5+TEojM78UHU2QhjLaR5l/oKZx82ia+BxTjHHNN76AaHtYAuOnskerbT",
    "2YMH06SvDijeHRPilFvMkYgdEl0P78BV4eFgdY76OexPTX3Cgi0olmmmsRSWj+lb0K2tfgtxXpk5/TGRjUIuXczh6Uu7NAq60DcblCwDVXfnA0utakk3ZU2b3mKLGbJBXZ2HukdnFoooocu61ySn5CzefihXnBKOfW0QAaFbLZzE0FLpUCIw7IRmqjXcL1/3Rpl8il3kR4qKDkTraHUvmqHA1kHRHfnS6zAZuPU3aPzxdLhu5zUOd0d4a573UFR2XngS92pGm3qwCTnwohrVrdYGX70Bx4C3qFcUAr62RiNScPkRM8nHyCC11MD7eBq+x1b/YRsXaphzeBNoauog0x14202qW2INusm1j8jY1BC8nVDbAulZI1SiTqbpA0ZtlhaL7n3zjZ6yKgbBITWU3DrRJ6Utp3EBeDmVkPZ0LlYuZdmNU89Jli2C9ujtmlE1ccSfyZLNHnD0qLm2XcXsk1pNMGE8/eFqJC3py3lU6MfymQcXSur5S8SRJkAnS7k2wX6lFRZbEuHvZUtvlmBvo2X3NOAQw/m/W+Cpt0OdyDkes8aCEYeWi3oIl5t7mMZ3C8K30DTLadVi+13WgqM9k/u2rpCHoQ0pJ4cLooc1u7AJr1FP7hg1ggUeqqQA9xT9DvgpIKPNOGQtbM0CG+GZq1v8yKKPK+Prro1CI1nEgEax0Zgk7BhwG44zVgcLGZiQW6d80RH5rpHmNBYrdjoRoKnRkGVCtfmg6pSLA4oAltjP+JEc2GrX4JYutPV5RuTrXFhRKkB1c2Zw65QliNBoRoUn7JlhHGngpNmgnGsL73UqMCaVEYTdjcVmOJxUZhgXhL0pfI5PQ7zRFcAitbyb8hrRUwM4zYF01sy6wk8NGD0s3AlXaugZZY11LNLVuvWjWpJR4XW9HSXAUxBkJeTpUAwAaeNmWz1TNpKBPxPFX04ADuYiOzDuJEWPOAyAMB2EERzjOvW3zEwXg6fiBDtV7gDb0YkcD56QHNbiF8KCEYOn4AdOZCoGT0EYr73tYoBhjDnp/HxPwzIeIYHbT6QoaqkqU62/MSNieaxaaI6vBILkvvVSHVKg22hMtv0Obqyp8qJbiF8zbHCvDt3JhGXBOiAB3dws6LPvPo28ixlPDs7mQI29lvpw9y20tyeylm2UKO6YECkk4ZZ821gZrsoH0KMSfUU1c+nPtU/1OaEFw/ZNsax3hvJ98up8HeG3vB/nqLYhODNOQaTTid3XW4OPCrpNqSAAlxM3QBKEy44HdbhSYS1UGdmFDkKOinokkmrCOyAU/FXw2FwT+mLmgi9fvShaT2w/5rOk5I+AA27EdCk34h0Glpno9Nokkdx+LK29zB9WhYpBR63DMKjZvEGNCHZnamZ5YuTg7KkS0gPeyCbAAt4P+pBIEkS+i/swjCxaSiz3g7tw5zHsqgs3pw/zopbUnX892S3hhk6kqujMcn7FyRFHFqd8xeb3/cUih7XUjPuHFgy9mYCgeq9oghv7EWAbNkcGtCLSC06RcfSGQEsUhAVllTrfZr/2+WCTyM4VDG10CHcO77Nsim/1ZIxzKRZUrpByDpIS7g5K3aaII0DUFDHk4HOVzTVqmKCOm6fkjI0rmfZBMaWrh6JgyK1SWEujSOSiSljo9V5bHJ0jmagXVvQyyRiAFnT+pIoTsSYa4xLfV1T/wedZUU1ENJyDLmrqJNp6j8YRCtPKqDTcO3byIn0VFKNL0fItxqUtjIF7IOPsW7xzVuCjeeJaaUmKmoude9UYbFRkDyqqCs76sqvGr95ioQ1k9J7sIW+kenn0YWK4oVlBAbeIMXKtN7CUkj48RPYRVxMD1SBYX+Ah88X8iCnLWiYcHiN+hhnrzOF5w5reoVtSZ1g/Hi/GvAIkw6VJW3OPa1j2SLBGudp9f9O7aCNbxtJXPbHbIdKBqgBrCUW1RsIoZhptIHhUhv0g40FfDkr7bOaNfSYahjtkyozg3CGY4WFuBDthSuQvOBYGRBGe6bk9j9J4hIMA",
    "JJDozOZMNbWENaue+bLsnKwWOReFow/l9vxOka0EGM8bx/AjGNWMZhZmVvOtGZOd+Lg0RB5lqW/NHGniopM8WcChhEe+CY/TxAsb6JJ6ZSEags+pB3xTW+4kDFsLpbA33X5K1dyIHew3N4nulfIRBpbyIgdsVIbFm5wVKM+DrmmLwBqHTCiD02VhqxuIyKhqF40CrrWSrdx8f+5FGlaitlbzRjmRH6D2KWVt2vqn1rr8Q1Q8DYTgAn0DKxCQ7ScPW3xhobZ0qFqOZ9D12FRnfe6OJXYwIYfATKU6WxRNowN7zdqC+VpdsFYAbQZteicsrNDqGt0Au2EVa2Aq0/b5Yx+kIPlnXhcddEsXe0vhYs9DYkVzaTsG+noFg93zarfPhygX70Ky7+tEYoSt0VJr96XK3NXouBB9W13SBukO6vjdkbDHKL2Luob8tUWDtUSN7SuL27O6YLP8EM2TsgePmGASLaGbmRG5lPdUw66277MFmhHrmEzLVEVXXNZuHdz2ero9o9E1agoB3wMYcYwJ4Euh3Dw5rYnr1qJz3PtY6gmIkn1ZLFxRmg7QZStAhKWCvUvTCASN4sLQxrgUMbUG7YH4OXYfn8XOQFcQ2EKJvGucweciuMlvS1sr0IXNoq2dvFFIOISVSVUnr4QN9TIOv7AQsVueql/bHQwJLmZ4FoHoMOiKCZtyBHJXxNfV7I1i645Rc23E2R6Uwj4RBYaS1jion2+9YPIOXXCRY/vD53Yogw0P646f+9E//y8FeIvvuIwAAA=="
  ].join("");

  const FALLBACK = Object.freeze({
    "Área protegida · Acceso al Laboratorio Inteligente": "Protected area · Intelligent Laboratory access",
    "Laboratorio Inteligente": "Intelligent Laboratory",
    "Correo electrónico": "Email address",
    "Contraseña": "Password",
    "Mostrar contraseña": "Show password",
    "Iniciar sesión": "Sign in",
    "Recuperar contraseña": "Recover password",
    "Noticias del Grupo El Kernel": "El Kernel Research Group News",
    "Más detalles →": "More details →",
    "Cerrar": "Close"
  });

  const TEXT_ORIGINAL = new WeakMap();
  const ATTRIBUTE_ORIGINAL = new WeakMap();
  const PROTECTED = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "NOSCRIPT"]);
  let dictionary = null;
  let reverse = null;
  let loadPromise = null;
  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
  const relevantRoute = () => ["laboratoriokernel", "noticias"].includes(route());
  const language = () => {
    const saved = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return saved === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

 async function inflateDictionary() {
  if (dictionary) return dictionary;

  if (!loadPromise) {
    loadPromise = (async () => {
      try {
        if (!("DecompressionStream" in window)) {
          throw new Error("DecompressionStream unavailable");
        }

        const binary = atob(COMPRESSED_MAP);

        const bytes = Uint8Array.from(
          binary,
          character => character.charCodeAt(0)
        );

        const stream = new Blob([bytes])
          .stream()
          .pipeThrough(new DecompressionStream("gzip"));

        dictionary = {
          ...(await new Response(stream).json()),
          ...FALLBACK
        };
      } catch (error) {
        console.error(
          "Kernel Laboratory/News translation dictionary:",
          error
        );

        dictionary = {
          ...FALLBACK
        };
      }

      reverse = Object.fromEntries(
        Object.entries(dictionary).map(
          ([spanish, english]) => [
            normalize(english),
            spanish
          ]
        )
      );

      return dictionary;
    })();
  }

  return loadPromise;
}

  function preserveWhitespace(original, replacement) {
    const match = String(original).match(/^(\s*)([\s\S]*?)(\s*)$/);
    return `${match?.[1] || ""}${replacement}${match?.[3] || ""}`;
  }

  function canonicalSpanish(value) {
    const clean = normalize(value);
    if (dictionary?.[clean]) return clean;
    return reverse?.[clean] || null;
  }

  function translateText(root, lang) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.parentElement || PROTECTED.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
        const canonical = canonicalSpanish(node.nodeValue);
        return canonical ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!TEXT_ORIGINAL.has(node)) TEXT_ORIGINAL.set(node, canonicalSpanish(node.nodeValue) || node.nodeValue || "");
      const spanish = TEXT_ORIGINAL.get(node) || "";
      const next = lang === "en" ? dictionary[normalize(spanish)] : spanish;
      if (!next) return;
      const rendered = preserveWhitespace(node.nodeValue || spanish, next);
      if (node.nodeValue !== rendered) node.nodeValue = rendered;
    });
  }

  function originalAttribute(element, attribute) {
    let record = ATTRIBUTE_ORIGINAL.get(element);
    if (!record) {
      record = {};
      ATTRIBUTE_ORIGINAL.set(element, record);
    }
    if (!(attribute in record)) {
      const current = element.getAttribute(attribute) || "";
      record[attribute] = canonicalSpanish(current) || current;
    }
    return record[attribute];
  }

  function translateAttributes(root, lang) {
    root.querySelectorAll?.("[aria-label],[placeholder],[title],[alt]").forEach(element => {
      ["aria-label", "placeholder", "title", "alt"].forEach(attribute => {
        if (!element.hasAttribute(attribute)) return;
        const spanish = originalAttribute(element, attribute);
        const translated = dictionary[normalize(spanish)];
        const next = lang === "en" ? translated : spanish;
        if (next && element.getAttribute(attribute) !== next) element.setAttribute(attribute, next);
      });
    });
  }

  async function apply(root = document) {
    if (applying || !relevantRoute() || !document.body) return;
    applying = true;
    await inflateDictionary();
    try {
      const lang = language();
      const target = root === document ? document.body : root;
      translateText(target, lang);
      translateAttributes(target, lang);
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 45) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => apply(), delay);
  }

  new MutationObserver(mutations => {
    if (applying || !relevantRoute()) return;
    const added = mutations.flatMap(mutation => [...mutation.addedNodes]).filter(node => node.nodeType === Node.ELEMENT_NODE);
    if (!added.length) return;
    window.clearTimeout(timer);
    timer = window.setTimeout(async () => {
      for (const node of added) await apply(node);
      await apply();
    }, 35);
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelLabNewsLanguage = {
    version: "1.0.0",
    apply,
    ready: inflateDictionary,
    diagnostics: () => ({ route: route(), language: language(), translations: dictionary ? Object.keys(dictionary).length : 0 })
  };

  inflateDictionary().finally(schedule);
})();
