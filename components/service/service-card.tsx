const ServiceCard = () => {
    return ( 
    <div className='col-span-2 p-2 rounded-lg bg-slate-400 md:col-span-1 dark:bg-slate-400'>
        <div className='flex items-center p-2 space-x-5 '>
            <div className= ' text-shiumcustom h-22 w-22'>Icon </div>  
            <div>
                <h4 className='font-bold'>title</h4>
                <p>description........................................</p>
            </div>
                
        </div>

    </div>
     );
}
 
export default ServiceCard;