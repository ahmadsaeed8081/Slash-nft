import React, { useEffect, useState } from "react";
import NftCard from "../NftCard/NftCard";
import BuyNowModal from "../BuyNowModal/BuyNowModal";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import AnnouncementModal from "../AnnouncementModal/AnnouncementModal";
import MyBalanceModal from "../MyBalanceModal/MyBalanceModal";
import { GrPowerReset } from "react-icons/gr";
import { all } from "axios";
import {
  cont_address,
  cont_abi,
} from "../../components/config";
import Web3 from "web3";
const NftProduct = ({mintNFT,set_choosedNFT,mintedNfts}) => {
  const { t } = useTranslation();

  const [showModal6, setShowModal6] = useState(false);
  const handleClose6 = () => setShowModal6(false);

  const [showModal4, setShowModal4] = useState(false);

  const handleClose4 = () => setShowModal4(false);
  const [allNfts, set_allNfts] = useState([]);
  const [availbleNfts, set_available_nfts] = useState([]);

  const data = [ ];
  let count=0;

async function mount(){
if(count>0)
{
  return;
}
count++;
  const web3= new Web3(new Web3.providers.HttpProvider("https://polygon-mumbai-bor.publicnode.com	"));
  
  const contract = new web3.eth.Contract(cont_abi, cont_address);
 
  
  let mintedList_arr = await contract.methods.get_MintedNFTs().call();
  for(let i=1;i<=999;i++)
  {
    let allow=true;
    // console.log("its j "+mintedList_arr);

    for(let j=0; j<mintedList_arr.length;j++)
    {        
      // console.log("its j "+mintedList_arr);

      if(mintedList_arr[j]==i)
      {
        allow=false;
        break;
      }
    }
    if ( allow==true)
    {
        let img= ("./images/"+i+".png")
        data.push(
        {
        id: i,
        title: "SLASH # "+i,
        price: "80 USDT",
        image: img,
        })
  }
  }
  set_allNfts(data)
  set_available_nfts(data.length)
}















useEffect(()=>{
mount();
},[mintedNfts])

  

  const [users, setUsers] = useState(data.slice(0, 999));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 32;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(availbleNfts / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);


  


  return (
    <>
      <div className="container w-full mx-auto py-10">


        <div className=" flex items-center  justify-center mt-7 gap-4">
          <div className=" relative">

          </div>
        </div>

        <div className=" flex   justify-between px-6 md:px-0 pt-6 items-center">
          <div>
            <h1 className=" text-lg md:text-2xl font-bold">
              {t("NFT_Market")}
            </h1>
          </div>
          <div>
            <h1 className=" text-md md:text-xl">Available : {availbleNfts} NFTs</h1>
          </div>
        </div>
     
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",

              marginBottom: 10,
              padding: "10px", // Add some padding for spacing
            }}
          >
            <div className="border border-gray-200 flex bg-white rounded-md gap-4 w-[80%] md:w-[40%] items-center p-2">
              <i>
                <CiSearch />
              </i>
              <input
                placeholder={t("Search")}
                className="bg-white outline-none w-full rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="   py-12  w-full px-6 grid  grid-cols-2  xl:grid-cols-4 md:grid-cols-2 gap-5 md:gap-12">
          <MyBalanceModal onClose5={handleClose4} visible5={showModal4} />
          {/* <BuyNowModal onClose6={handleClose6} visible6={showModal6} /> */}

          {allNfts
            ?.slice(pagesVisited, pagesVisited + usersPerPage)
            .map((item, index) => {
              return (
                <>
                  <NftCard
                    open_buy_popup_mobile={() => setShowModal4(true)}
                    open_buy_popup={() => setShowModal6(true)}
                    image={item?.image} id={item?.id} title={item?.title}
                    mintNFT={mintNFT} set_choosedNFT={set_choosedNFT}
                  />
                </>
              );
            })}
        </div>
        <div className="pb-40">
          <ReactPaginate
            previousLabel={t("Previous")}
            nextLabel={t("Next")}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </>
  );
};

export default NftProduct;
