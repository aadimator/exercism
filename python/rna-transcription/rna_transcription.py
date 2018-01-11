def to_rna(dna_strand):
    rna_strand = ""
    for char in dna_strand:
        if char == 'G':
            rna_strand += 'C'
        elif char == 'C':
            rna_strand += 'G'
        elif char == 'T':
            rna_strand += 'A'
        elif char == 'A':
            rna_strand += 'U'
        else:
            raise ValueError("Invalid input")
    return rna_strand

