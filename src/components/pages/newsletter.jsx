import { useParams, Navigate, useNavigate } from "react-router-dom";

export default function NewsLetter() {
    const navigate = useNavigate();
    function goBack() {
        navigate("/about")
    }
    return (
        <section><h3>Sign Up For Our Newsletter</h3>
            <button onClick={goBack}>Sign me up for hourly updates!</button>
        </section>

    );
  };