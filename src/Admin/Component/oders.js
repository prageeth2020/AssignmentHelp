import React, {Component} from 'react';

class Oders extends Component {
    render() {
        return (
            <div className="my-2 mx-4">
                <table className="">
                    <tbody id="">
                        <tr className="">
                            <td className="brd">
                                <p className="mx-2 my-2"> Order Number  length  </p>
                                <div className="mx-2 my-2">
                                    A desktop application assignment was published by
                                    <b>  item.firstName  item.LastName  </b>
                                    the email is
                                    <b >item.Email </b>
                                    you can contact via mobile
                                    <b> item.MobileNo  </b>
                                    and the pdf can be downloaded below <br/>
                                    <br/> <a  class=" my-5 text-primary "  onClick="viewFile((length + 1))"> View Document</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Oders;